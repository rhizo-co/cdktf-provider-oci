# `dataOciCoreDedicatedVmHostsInstances` Submodule <a name="`dataOciCoreDedicatedVmHostsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostsInstances <a name="DataOciCoreDedicatedVmHostsInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances oci_core_dedicated_vm_hosts_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances(
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
  dedicated_vm_host_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}.

---

##### `dedicated_vm_host_id`<sup>Required</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.dedicatedVmHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#filter DataOciCoreDedicatedVmHostsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreDedicatedVmHostsInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreDedicatedVmHostsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances">dedicated_vm_host_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput">dedicated_vm_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicated_vm_host_instances`<sup>Required</sup> <a name="dedicated_vm_host_instances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostInstances"></a>

```python
dedicated_vm_host_instances: DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filter"></a>

```python
filter: DataOciCoreDedicatedVmHostsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList">DataOciCoreDedicatedVmHostsInstancesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `dedicated_vm_host_id_input`<sup>Optional</sup> <a name="dedicated_vm_host_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostIdInput"></a>

```python
dedicated_vm_host_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dedicated_vm_host_id`<sup>Required</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.dedicatedVmHostId"></a>

```python
dedicated_vm_host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostsInstancesConfig <a name="DataOciCoreDedicatedVmHostsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  dedicated_vm_host_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId">dedicated_vm_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#compartment_id DataOciCoreDedicatedVmHostsInstances#compartment_id}.

---

##### `dedicated_vm_host_id`<sup>Required</sup> <a name="dedicated_vm_host_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.dedicatedVmHostId"></a>

```python
dedicated_vm_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#dedicated_vm_host_id DataOciCoreDedicatedVmHostsInstances#dedicated_vm_host_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#availability_domain DataOciCoreDedicatedVmHostsInstances#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#filter DataOciCoreDedicatedVmHostsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#id DataOciCoreDedicatedVmHostsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances()
```


### DataOciCoreDedicatedVmHostsInstancesFilter <a name="DataOciCoreDedicatedVmHostsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#name DataOciCoreDedicatedVmHostsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#values DataOciCoreDedicatedVmHostsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_hosts_instances#regex DataOciCoreDedicatedVmHostsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances">DataOciCoreDedicatedVmHostsInstancesDedicatedVmHostInstances</a>

---


### DataOciCoreDedicatedVmHostsInstancesFilterList <a name="DataOciCoreDedicatedVmHostsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreDedicatedVmHostsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreDedicatedVmHostsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]]

---


### DataOciCoreDedicatedVmHostsInstancesFilterOutputReference <a name="DataOciCoreDedicatedVmHostsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_dedicated_vm_hosts_instances

dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreDedicatedVmHostsInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostsInstances.DataOciCoreDedicatedVmHostsInstancesFilter">DataOciCoreDedicatedVmHostsInstancesFilter</a>]

---



