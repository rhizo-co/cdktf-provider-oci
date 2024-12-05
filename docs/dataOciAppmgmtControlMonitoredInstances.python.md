# `dataOciAppmgmtControlMonitoredInstances` Submodule <a name="`dataOciAppmgmtControlMonitoredInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAppmgmtControlMonitoredInstances <a name="DataOciAppmgmtControlMonitoredInstances" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances oci_appmgmt_control_monitored_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances(
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
  filter: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#filter DataOciAppmgmtControlMonitoredInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAppmgmtControlMonitoredInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAppmgmtControlMonitoredInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAppmgmtControlMonitoredInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList">DataOciAppmgmtControlMonitoredInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.monitoredInstanceCollection">monitored_instance_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filter"></a>

```python
filter: DataOciAppmgmtControlMonitoredInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList">DataOciAppmgmtControlMonitoredInstancesFilterList</a>

---

##### `monitored_instance_collection`<sup>Required</sup> <a name="monitored_instance_collection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.monitoredInstanceCollection"></a>

```python
monitored_instance_collection: DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAppmgmtControlMonitoredInstancesConfig <a name="DataOciAppmgmtControlMonitoredInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#compartment_id DataOciAppmgmtControlMonitoredInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#display_name DataOciAppmgmtControlMonitoredInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#filter DataOciAppmgmtControlMonitoredInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#id DataOciAppmgmtControlMonitoredInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAppmgmtControlMonitoredInstancesFilter <a name="DataOciAppmgmtControlMonitoredInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#name DataOciAppmgmtControlMonitoredInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#values DataOciAppmgmtControlMonitoredInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#regex DataOciAppmgmtControlMonitoredInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#name DataOciAppmgmtControlMonitoredInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#values DataOciAppmgmtControlMonitoredInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/appmgmt_control_monitored_instances#regex DataOciAppmgmtControlMonitoredInstances#regex}.

---

### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection()
```


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAppmgmtControlMonitoredInstancesFilterList <a name="DataOciAppmgmtControlMonitoredInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAppmgmtControlMonitoredInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAppmgmtControlMonitoredInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]]

---


### DataOciAppmgmtControlMonitoredInstancesFilterOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAppmgmtControlMonitoredInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesFilter">DataOciAppmgmtControlMonitoredInstancesFilter</a>]

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.monitoringState">monitoring_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `monitoring_state`<sup>Required</sup> <a name="monitoring_state" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.monitoringState"></a>

```python
monitoring_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItems</a>

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference <a name="DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_appmgmt_control_monitored_instances

dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.items"></a>

```python
items: DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAppmgmtControlMonitoredInstances.DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection">DataOciAppmgmtControlMonitoredInstancesMonitoredInstanceCollection</a>

---



