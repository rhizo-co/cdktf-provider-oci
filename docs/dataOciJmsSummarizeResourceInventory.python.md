# `dataOciJmsSummarizeResourceInventory` Submodule <a name="`dataOciJmsSummarizeResourceInventory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsSummarizeResourceInventory <a name="DataOciJmsSummarizeResourceInventory" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory oci_jms_summarize_resource_inventory}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  id: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsSummarizeResourceInventory resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsSummarizeResourceInventory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsSummarizeResourceInventory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsSummarizeResourceInventory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsSummarizeResourceInventory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.activeFleetCount">active_fleet_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.applicationCount">application_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.installationCount">installation_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.jreCount">jre_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.managedInstanceCount">managed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active_fleet_count`<sup>Required</sup> <a name="active_fleet_count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.activeFleetCount"></a>

```python
active_fleet_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_count`<sup>Required</sup> <a name="application_count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.applicationCount"></a>

```python
application_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `installation_count`<sup>Required</sup> <a name="installation_count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.installationCount"></a>

```python
installation_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jre_count`<sup>Required</sup> <a name="jre_count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.jreCount"></a>

```python
jre_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_instance_count`<sup>Required</sup> <a name="managed_instance_count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.managedInstanceCount"></a>

```python
managed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsSummarizeResourceInventoryConfig <a name="DataOciJmsSummarizeResourceInventoryConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_summarize_resource_inventory

dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  id: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#compartment_id DataOciJmsSummarizeResourceInventory#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#id DataOciJmsSummarizeResourceInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_end DataOciJmsSummarizeResourceInventory#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsSummarizeResourceInventory.DataOciJmsSummarizeResourceInventoryConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_summarize_resource_inventory#time_start DataOciJmsSummarizeResourceInventory#time_start}.

---



